import { Search } from "@mui/icons-material"
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { useSearch } from "../hooks/useSearch";

export const SearchGuide = () => {

    const { formData, onInputchange } = useSearch({ search: "" });

    return (
        <form >
            <OutlinedInput
                fullWidth
                placeholder="Busca una guía"
                onChange={onInputchange}
                name="search"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            sx={{
                                height: "56px",
                                width: "55px",
                                bgcolor: "#6e5856",
                                borderRadius: 0,
                                padding: 0,
                                "&:hover": { backgroundColor: "#6e5856" }
                            }}
                        >
                            <Search fontSize="large" />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </form>
    )
}
