import { ChangeEvent, useState } from "react"

export const useSearch = <T extends Object>(initialState: T) => {

    const [formData, setFormData] = useState(initialState);

    const onInputchange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return {
        onInputchange,
        formData
    }
}
