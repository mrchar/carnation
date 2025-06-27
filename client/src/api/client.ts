import {createFetch} from "@vueuse/core";

const useApi = createFetch({baseUrl: "http://localhost:8080/api"})

export default useApi