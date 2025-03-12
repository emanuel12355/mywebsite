import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { 
  SiNodedotjs, SiPhp, SiMysql, SiDotnet, 
  SiPython, SiRubyonrails, SiGo, SiMongodb 
} from "react-icons/si";

const techStack = [
  { icon: <SiNodedotjs size={50} color="#68A063" />, name: "Node.js", color: "#68A063" },
  { icon: <SiPhp size={50} color="#777BB4" />, name: "PHP", color: "#777BB4" },
  { icon: <SiMysql size={50} color="#00758F" />, name: "MySQL", color: "#00758F" },
  { icon: <SiDotnet size={50} color="#512BD4" />, name: ".NET Core", color: "#512BD4" },
  { icon: <SiPython size={50} color="#3776AB" />, name: "Python", color: "#3776AB" },
  { icon: <SiRubyonrails size={50} color="#CC0000" />, name: "Ruby on Rails", color: "#CC0000" },
  { icon: <SiGo size={50} color="#00ADD8" />, name: "Go", color: "#00ADD8" },
  { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB", color: "#47A248" },
];

const Appbar = () => {
  const [selectedTab, setSelectedTab] = useState("Backend");

  return (
    <Box textAlign="center" p={4}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold">Our Tech Stack</Typography>

      {/* Tabs Section */}
      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => setSelectedTab(newValue)}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        {["Backend", "Frontend", "Databases", "CMS", "CloudTesting", "DevOps"].map((tab) => (
          <Tab 
            key={tab}
            label={tab}
            value={tab}
            sx={{ 
              fontWeight: "bold",
              borderRadius: 2,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: selectedTab === tab ? "transparent" : "inherit",
              backgroundImage: selectedTab === tab ? "linear-gradient(to right, #F76680, #57007B)" : "none"
            }} 
          />
        ))}
      </Tabs>

      {/* Backend Technologies */}
      {selectedTab === "Backend" && (
        <Box mt={3} display="flex" flexWrap="wrap" justifyContent="center">
          {techStack.map((tech, index) => (
            <Box key={index} textAlign="center" m={2}>
              {tech.icon}
              <Typography sx={{ color: tech.color, fontWeight: "bold" }}>{tech.name}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Other Sections */}
      {selectedTab !== "Backend" && (
        <Typography mt={3} color="textSecondary">
          No technologies listed for {selectedTab}
        </Typography>
      )}
    </Box>
  );
};

export default Appbar;
