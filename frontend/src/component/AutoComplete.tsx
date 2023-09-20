import { useNavigate, useSearchParams } from "react-router-dom";
import { utilService } from "../services/util.service"
import { ConstRoutes } from "../constants/routes";
import { useMemo } from "react";

const AutoComplete = () => {
    const [_, setParams] = useSearchParams();
    const navigate = useNavigate()

    const debounce = useMemo(() => utilService.makeDebounce((value: string) => {
        const encodedQuery = encodeURIComponent(value);
        if (!value[0]) navigate(ConstRoutes.HOMEPAGE)
        else setParams({ q: encodedQuery });
    }, 1000), [])

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target
        debounce(value)
    }

    return (
        <form className="flex gap--5">
            <input onChange={(ev) => onChange(ev)} className="input" name="filterBy" type="text" placeholder="Search" />
        </form>
    )
}

export default AutoComplete
