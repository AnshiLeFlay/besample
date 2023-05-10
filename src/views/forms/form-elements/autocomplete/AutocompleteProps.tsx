// ** MUI Imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// ** Data
//import { top100Films } from 'src/@fake-db/autocomplete'
const top100Films: any = {};

const AutocompleteProps = () => {
    return (
        <Box
            className="demo-space-x"
            sx={{ display: "flex", flexWrap: "wrap" }}
        >
            <Autocomplete
                sx={{ width: 250 }}
                disableCloseOnSelect
                options={top100Films}
                id="autocomplete-disableCloseOnSelect"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="disableCloseOnSelect" />
                )}
            />
            <Autocomplete
                clearOnEscape
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-clearOnEscape"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="clearOnEscape" />
                )}
            />
            <Autocomplete
                disableClearable
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-disableClearable"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="disableClearable" />
                )}
            />
            <Autocomplete
                openOnFocus
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-openOnFocus"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="openOnFocus" />
                )}
            />
            <Autocomplete
                autoHighlight
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-autoHighlight"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="autoHighlight" />
                )}
            />
            <Autocomplete
                autoSelect
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-autoSelect"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="autoSelect" />
                )}
            />
            <Autocomplete
                blurOnSelect
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-blurOnSelect"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="blurOnSelect" />
                )}
            />
            <Autocomplete
                clearOnBlur
                sx={{ width: 250 }}
                options={top100Films}
                id="autocomplete-clearOnBlur"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="clearOnBlur" />
                )}
            />
            <Autocomplete
                sx={{ width: 250 }}
                options={top100Films}
                selectOnFocus={false}
                id="autocomplete-selectOnFocus"
                getOptionLabel={(option: any) => option.title || ""}
                renderInput={(params) => (
                    <TextField {...params} label="selectOnFocus={false}" />
                )}
            />
        </Box>
    );
};

export default AutocompleteProps;
