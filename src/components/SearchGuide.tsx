import { Search } from "@mui/icons-material"
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { useSearch } from "../hooks/useSearch";

export const SearchGuide = () => {

    const { onInputchange, onSearch } = useSearch();

    return (
        <form onSubmit={onSearch}>
            <OutlinedInput
                fullWidth
                placeholder="Busca una guía"
                onChange={onInputchange}
                name="search"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            type="submit"
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
