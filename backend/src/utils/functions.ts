import { PrismaClient } from "@prisma/client";

export const generateRandomPassword = (length: number) => {
    const possibleChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += possibleChars.charAt(
            Math.floor(Math.random() * possibleChars.length)
        );
    }
    return password;
};

export const domainCheck = async (email: string) => {
    try {
        const [, domain] = email.split("@");
        const emailDomain = domain.split(".");

        const prisma = new PrismaClient();

        const univerDB = await prisma.universities.findMany();

        if (domain === undefined) return;

        for (let i = 0; i < univerDB.length; i++) {
            if (univerDB[i].Domains !== null) {
                let needleDomain = univerDB[i].Domains!.split(".");

                let findCount = 0;
                let index = emailDomain.length - 1;

                for (let i = needleDomain.length - 1; i > -1; i--) {
                    if (needleDomain[i] === emailDomain[index]) findCount++;
                    else break;
                    index--;
                }

                if (findCount === needleDomain.length)
                    return {
                        id: univerDB[i].id,
                        name: univerDB[i].Name,
                        type: "university_domain",
                    };
            }
        }

        //проверяем .ac и .edu
        if (emailDomain[emailDomain.length - 1] === "ac") return { type: "ac" };
        if (emailDomain[emailDomain.length - 1] === "edu")
            return { type: "edu" };

        //проверяем whitelist

        return null;
    } catch (err: any) {
        return { error: err.message, type: "error" };
    }
};
