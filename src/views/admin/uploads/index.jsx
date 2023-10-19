/*!

*/

// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "../uploads/components/Banner";
import General from "../uploads/components/General";
import Notifications from "../uploads/components/Notifications";
import Projects from "../uploads/components/Projects";
import Storage from "../uploads/components/Storage";
import Upload from "../uploads/components/Upload";
import UploadUsers from "../uploads/components/UploadUsers";
import UploadCourses from "../uploads/components/UploadCourses";
import UploadUserCourses from "../uploads/components/UploadUserCourses";

// Assets
import banner from "../../../assets/img/auth/banner.png";
import avatar from "../../../assets/img/avatars/avatar4.png";
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          /* base: "1fr",
          lg: "1.34fr 1fr 1.62fr", */
        }}
        /* templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }} */
        templateRows={{
          base: "repeat(1 , 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        {/* <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Martina Velaquez'
          job='Profesora'
          posts='17'
          followers='9.7k'
          following='274'
        /> */}
        {/* <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        /> */}

        <UploadUsers
          /* gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }} */
          gridArea='1 / 1 / 2 / 2'
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe='20px'
          pb={{ base: "100px", lg: "20px" }}
        />      
      </Grid>
      <Grid
        templateColumns={{
          /* base: "1fr",
          lg: "1.34fr 1fr 1.62fr", */
        }}
        /* templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }} */
        templateRows={{
          base: "repeat(1 , 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
          <UploadCourses
            /* gridArea={{
              base: "3 / 1 / 4 / 2",
              lg: "1 / 3 / 2 / 4",
            }} */
            gridArea='1 / 1 / 2 / 2'
            minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
            pe='20px'
            pb={{ base: "100px", lg: "20px" }}
          />
        </Grid>
        <Grid
        templateColumns={{
          /* base: "1fr",
          lg: "1.34fr 1fr 1.62fr", */
        }}
        /* templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }} */
        templateRows={{
          base: "repeat(1 , 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
          <UploadUserCourses
            /* gridArea={{
              base: "3 / 1 / 4 / 2",
              lg: "1 / 3 / 2 / 4",
            }} */
            gridArea='1 / 1 / 2 / 2'
            minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
            pe='20px'
            pb={{ base: "100px", lg: "20px" }}
          />
        </Grid>
      {/* <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
        <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "2 / 1 / 3 / 3",
            "2xl": "1 / 3 / 2 / 4",
          }}
        />
      </Grid> */}
    </Box>
  );
}
