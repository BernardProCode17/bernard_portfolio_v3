// This is a server component for data fetching
import {ProjectCardProps} from "@/types/projectsTypes";
import {fetchFunction, fetchProjectQuery} from "@/functions/fetchFunctions";

// Export a function to fetch the data
export async function getProjectsData() {
    return await fetchFunction(fetchProjectQuery);
}