import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "@chakra-ui/react";

const Github = () => {
    // Determine the color scheme based on the current color mode
    const colorScheme = useColorModeValue("light", "dark");

    // const selectLastHalfYear = (contributions) => {
    //     const currentDate = new Date();
    //     const currentYear = currentDate.getFullYear();
    //     const currentMonth = currentDate.getMonth();
    //     const shownMonths = 7;
    //     const monthsPerYear = 12;

    //     return contributions.filter((activity) => {
    //         const date = new Date(activity.date);
    //         const year = date.getFullYear();
    //         const month = date.getMonth();

    //         // Calculate the number of months from the current date to the activity's date
    //         const diffYears = currentYear - year;
    //         const diffMonths = diffYears * monthsPerYear + currentMonth - month;

    //         // Return true if the activity's date is within the last 6 months
    //         return diffMonths >= 0 && diffMonths < shownMonths;
    //     });
    // };

    return (
        <GitHubCalendar
            username="rudra-cs"
            // transformData={selectLastHalfYear}
            colorScheme={colorScheme}
            hideColorLegend
            labels={{
                totalCount: "{{count}} contributions in the last year",
            }}
            renderBlock={(block, activity) => (
                <Tooltip
                    label={`${activity.count} activities on ${activity.date}`}
                >
                    {block}
                </Tooltip>
            )}
        />
    );
};

export default Github;
