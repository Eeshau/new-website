export const locations: {
  id: string;
  name: string;
  date: string;
  location: string;
  lumaLink: string;
  joinLink: string;
  instagramLink: string;
  twitterLink: string;
  youtubeLink: string;
  websiteLink: string;
  imageSrc?: string; // Add this line
  coordinates: [number, number];
}[] = [
  {
    id: "waterloo",
    name: "Socratica",
    date: "MARCH 2022",
    location: "Waterloo, ON",
    lumaLink: "https://lu.ma/embed/calendar/cal-cBMgU2QXqXZQSv1/events",
    joinLink: "https://lu.ma/socratica",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [43.477305, -80.549252],
  },
  {
    id: "toronto",
    name: "Socratica",
    date: "JANUARY 2023",
    location: "Toronto, ON",
    lumaLink: "https://lu.ma/embed/calendar/cal-PxG5QruZfgz28XB/events",
    joinLink: "https://lu.ma/socraticaTO",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [43.664714, -79.385477],
  },
  {
    id: "vancouver",
    name: "Atelier",
    date: "SEPTEMBER 2023",
    location: "Vancouver, BC",
    lumaLink: "https://lu.ma/embed/calendar/cal-CvuDnsONPxinxqk/events",
    joinLink: "https://lu.ma/atelier.ubc",
    instagramLink: "https://www.instagram.com/atelier.ubc",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [49.2600924, -123.2509564],
  },
  {
    id: "cambridge-uk",
    name: "Scale Down",
    date: "OCTOBER 2023",
    location: "Cambridge, UK",
    lumaLink: "https://lu.ma/embed/calendar/cal-vHCyjMqqjpdduOt/events",
    joinLink: "https://lu.ma/scaledown",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [52.205338, 0.121817],
  },
  //   {
  //     id: "ottawa",
  //     name: "Agora",
  //     date: "OCTOBER 2023",
  //     location: "Ottawa, ON",
  //     lumaLink:
  //       "https://lu.ma/embed/calendar/cal-xPDTKP81aHIflKD/events",
  //     joinLink: "https://lu.ma/agora",
  //     instagramLink: "https://www.instagram.com/agora.cu",
  //     twitterLink: "https://twitter.com/socraticainfo",
  //     youtubeLink: "https://www.youtube.com/@socraticainfo",
  //     websiteLink: "https://www.socratica.info/",
  //     coordinates: [45.42153, -75.697193],
  //   },
  {
    id: "kingston",
    name: "id8.blankcanvas",
    date: "OCTOBER 2023",
    location: "Kingston, ON",
    lumaLink: "https://lu.ma/embed/calendar/cal-AxzTU0DF1vlwRSI/events",
    joinLink: "https://lu.ma/id8id8id8",
    instagramLink: "https://www.instagram.com/id8id8id8",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [44.231172, -76.485954],
  },
  {
    id: "berkeley",
    name: "Side Project Sundays",
    date: "SEPTEMBER 2023",
    location: "Berkeley, CA",
    lumaLink: "https://lu.ma/embed/calendar/cal-CRtUehgIQHLEB3o/events",
    joinLink: "https://lu.ma/commonroom",
    instagramLink: "https://www.instagram.com/berkeleycommonroom",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [37.871593, -122.272747],
  },
  {
    id: "western",
    name: "Momentum",
    date: "SEPTEMBER 2023",
    location: "London, ON",
    lumaLink: "https://lu.ma/embed/calendar/cal-gt0OmSf2cUw1HHl/events",
    joinLink: "https://lu.ma/moment.um",
    instagramLink: "https://www.instagram.com/momentum_uwo",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [43.009561, -81.275471],
  },
  {
    id: "mit",
    name: "Friendly Beans",
    date: "DECEMBER 2023",
    location: "Cambridge, MA",
    lumaLink: "https://lu.ma/embed/calendar/cal-yDZTDnxoCpg2xwE/events",
    joinLink: "https://lu.ma/beans",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [42.3629, -71.0839],
  },
  // {
  //     id: "san-francisco",
  //     name: "Playspace",
  //     date: "JANUARY 2024",
  //     location: "San Francisco, CA",
  //     lumaLink:
  //         "https://lu.ma/embed/calendar/cal-WrTTBMGBVUcTaij/events",
  //     joinLink: "https://lu.ma/playspace",
  //     instagramLink: "https://www.instagram.com/socratica.info",
  //     twitterLink: "https://twitter.com/socraticainfo",
  //     youtubeLink: "https://www.youtube.com/@socraticainfo",
  //     websiteLink: "https://www.socratica.info/",
  //     coordinates: [37.7937, -122.3965],
  // },
  {
    id: "stanford",
    name: "untitled",
    date: "JANUARY 2024",
    location: "Stanford, CA",
    lumaLink: "https://lu.ma/embed/calendar/cal-bBCpTcywZinszKP/events",
    joinLink: "https://lu.ma/untitled",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [37.4277, -122.1701],
  },
  {
    id: "usc",
    name: "Sundays",
    date: "JANUARY 2024",
    location: "Los Angeles, CA",
    lumaLink: "https://lu.ma/embed/calendar/cal-81AnmgiInWOKNmv/events",
    joinLink: "https://lu.ma/calendar/cal-81AnmgiInWOKNmv",
    instagramLink: "https://www.instagram.com/sundaysatusc",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.sundays.rsvp/",
    coordinates: [34.0224, -118.2851],
  },
  {
    id: "montreal",
    name: "Douze a Deux",
    date: "SEPTEMBER 2023",
    location: "Montreal, QC",
    lumaLink: "https://lu.ma/embed/calendar/cal-PIrfoWlJDawpNDO/events",
    joinLink: "https://lu.ma/douzeadeuxMontreal",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [45.5017, -73.5673],
  },
  {
    id: "washington",
    name: "Saturdays",
    date: "NOVEMEBER 2023",
    location: "Seattle, WA",
    lumaLink: "https://lu.ma/embed/calendar/cal-SD9FoHuZW6pQn6D/events",
    joinLink: "https://lu.ma/uwsaturdays",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://saturdays.rsvp/",
    coordinates: [47.6062, -122.3321],
  },
  {
    id: "unc",
    name: "Hatch",
    date: "JANUARY 2024",
    location: "Chapel Hill, NC",
    lumaLink: "https://lu.ma/embed/calendar/cal-p0CcDhZn6Z5elyX/events",
    joinLink: "https://lu.ma/unc-hatch",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [35.9049, -79.0469],
  },
  {
    id: "imperial",
    name: "Craft",
    date: "JANUARY 2024",
    location: "London, UK",
    lumaLink: "https://lu.ma/embed/calendar/cal-qFfyVkBdmPJ7yBv/events",
    joinLink: "https://lu.ma/craft_",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [51.4988, -0.1749],
  },
  {
    id: "tokyo",
    name: "ichinichiippo",
    date: "JANUARY 2024",
    location: "Tokyo, Japan",
    lumaLink: "https://lu.ma/embed/calendar/cal-vyilWokPjL5xHKF/events",
    joinLink: "https://lu.ma/ichinichi-ippo",
    instagramLink: "https://www.instagram.com/_ichinichiippo/",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [35.6895, 139.6917],
  },
  {
    id: "philly",
    name: "Code & Coffee",
    date: "SEPTEMBER 2024",
    location: "Philadelphia, PA",
    lumaLink: "https://lu.ma/embed/calendar/cal-ftxaA6PDR5Tbllt/events",
    joinLink: "https://lu.ma/code-and-coffee",
    instagramLink: "https://www.instagram.com/socratica.info",
    twitterLink: "https://twitter.com/socraticainfo",
    youtubeLink: "https://www.youtube.com/@socraticainfo",
    websiteLink: "https://www.socratica.info/",
    coordinates: [39.9500592, -75.1707463],
  },
  // {
  //   id: "ny",
  //   name: "New York Nodes",
  //   date: "APRIL 2024",
  //   location: "New York, NY",
  //   lumaLink: "",
  //   imageSrc: "http://straightupjac.xyz/socratica-nyc-cozy-sundays.png",
  //   joinLink:
  //     "https://www.notion.so/straightupjac/Socratica-NYC-public-5e1198e16be24eacae4d97f764717f21",
  //   instagramLink: "https://www.instagram.com/_ichinichiippo/",
  //   twitterLink: "https://twitter.com/socraticainfo",
  //   youtubeLink: "https://www.youtube.com/@socraticainfo",
  //   websiteLink:
  //     "https://www.notion.so/straightupjac/Socratica-NYC-public-5e1198e16be24eacae4d97f764717f21",
  //   coordinates: [40.7128, -74.006],
  // },
];
