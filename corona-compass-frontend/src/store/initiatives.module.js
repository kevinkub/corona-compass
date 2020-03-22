import ResultService from "@/common/api.service";

let FETCH_RESULT = "fetch_result";

export const actions = {
    async [FETCH_RESULT](context, initiativesSlug) {
        const { data } = await ResultService.get(initiativesSlug);
        return data;
    }
};