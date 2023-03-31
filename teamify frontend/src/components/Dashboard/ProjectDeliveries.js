import { Box, Typography } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";

const ProjectDeliveries = () => {
  const lineChartData = [
    {
      id: "target",
      color: "#6956E5",
      data: [
        { x: "Oct 2022", y: 5 },
        { x: "Nov 2022", y: 7 },
        { x: "Dec 2022", y: 9 },
        { x: "Jan 2023", y: 10 },
        { x: "Feb 2023", y: 11 },
        { x: "Mar 2023", y: 12 },
      ],
    },
    {
      id: "achieved",
      color: "#FB896B",
      data: [
        { x: "Oct 2022", y: 2 },
        { x: "Nov 2022", y: 4 },
        { x: "Dec 2022", y: 6 },
        { x: "Jan 2023", y: 8 },
        { x: "Feb 2023", y: 10 },
        { x: "Mar 2023", y: 11 },
      ],
    },
  ];

  return (
    <div
      style={{
        width: "670px",
        height: "407px",
        paddingLeft: "10px",
        margin: "5px",
        border: "1px solid #E6E8EC",
        borderRadius: "5%",

        display: "flex",
        flexDirection: "column",

        marginLeft: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: "10px",
        }}
      >
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          Project Deliveries
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "300px" }}>
        <ResponsiveLine
          data={lineChartData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Date",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Projects",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          enableGridX={false}
          enableGridY={false}
          lineWidth={3}
          enablePoints={false}
          pointSize={9}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    </div>
  );
};
export default ProjectDeliveries;
