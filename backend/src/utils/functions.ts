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

export const domainCheck = (email: string) => {
    const prisma = new PrismaClient();
    //prisma.universities

    const [, domain] = email.split("@");
    const [, tld] = domain.split(".");
};
