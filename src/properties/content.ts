import { CategoryType } from "../types/types";

export const sidebarRightIcons = [
  {
    background: "#de4f5f",
    icon: "github-mark-white.svg",
    link: "https://github.com/congchu",
  },
  {
    background: "#6348b1",
    icon: "notion-white.svg",
    link: "https://www.notion.so/cucus/FullStack-d5ecae2649a3484e9b236d79cd7d7fe4",
  },
  {
    background: "#4a8cda",
    icon: "velog-white.svg",
    link: "https://velog.io/@cookie004",
  },
];

export const newsList = [
  {
    key: 0,
    title: "기술 블로그를 운영 중",
    subTitle: "Available via desktop app, mobile apps, set-top",
    image: "react-streaming-dashboard-news-item-1.jpg",
    tags: [{ text: "번역", color: "#d94b87" }],
  },
  {
    key: 1,
    title: "블록체인 회사 다니는 중",
    subTitle: "Dungeons & Dragons On...",
    image: "react-streaming-dashboard-news-item-2.jpg",
    tags: [
      { text: "game", color: "#6647bf" },
      { text: "multi", color: "#4696b9" },
    ],
  },
];

export const topSelectionItemList = {
  project: [
    {
      key: "1",
      title: "Caffein, 수업 신청 서비스",
      subTitle: "교육 자료용 사이트",
      image: "portfoilo-thumbnail-4.png",
      avatar: "logo-react.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "MobX", color: "#eb8052" },
        { text: "CI/CD", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "2",
      title: "헬로제니, 영작 연습 사이트",
      subTitle: "개인 프로젝트",
      image: "portfoilo-thumbnail-3.png",
      avatar: "logo-react.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "Django", color: "#4770da" },
        { text: "AWS", color: "rgb(235, 128, 82)" },
      ],
    },
    {
      key: "3",
      title: "더키, 덕후들을 위한 커뮤니티",
      subTitle: "직장인 팀 프로젝트",
      image: "portfoilo-thumbnail-1.png",
      avatar: "logo-flutter.png",
      tags: [{ text: "Flutter", color: "#6647bf" }],
    },
  ],
  workExperience: [
    {
      key: "1",
      title: "Caffein, 수업 신청 서비스",
      subTitle: "교육 자료용 사이트",
      image: "portfoilo-thumbnail-4.png",
      avatar: "logo-react.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "MobX", color: "#eb8052" },
        { text: "CI/CD", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "2",
      title: "헬로제니, 영작 연습 사이트",
      subTitle: "개인 프로젝트",
      image: "portfoilo-thumbnail-3.png",
      avatar: "logo-react.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "Django", color: "#4770da" },
        { text: "AWS", color: "rgb(235, 128, 82)" },
      ],
    },
    {
      key: "3",
      title: "더키, 덕후들을 위한 커뮤니티",
      subTitle: "직장인 팀 프로젝트",
      image: "portfoilo-thumbnail-1.png",
      avatar: "logo-flutter.png",
      tags: [{ text: "Flutter", color: "#6647bf" }],
    },
  ],
  studyGroup: [
    {
      key: "1",
      title: "노마드인서울, 웹사이트 스터디 ",
      subTitle: "교육 자료용 사이트",
      image: "portfoilo-thumbnail-4.png",
      avatar: "logo-react.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "MobX", color: "#eb8052" },
        { text: "CI/CD", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "2",
      title: "번역 커뮤니티",
      subTitle: "개인 프로젝트",
      image: "portfoilo-thumbnail-3.png",
      avatar: "logo-react.png",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "Django", color: "#4770da" },
        { text: "AWS", color: "rgb(235, 128, 82)" },
      ],
    },
    {
      key: "3",
      title: "노마드인서울, 모닝루틴 모임",
      subTitle: "직장인 팀 프로젝트",
      image: "portfoilo-thumbnail-1.png",
      avatar: "logo-flutter.png",
      tags: [{ text: "Flutter", color: "#6647bf" }],
    },
  ],
  hobby: [],
  // learing: [],
};

export const topSelectionCategories: CategoryType[] = [
  { key: 1, label: "Side Project", value: "project" },
  { key: 2, label: "Study Group", value: "studyGroup" },
  // { key: 3, label: "Learning", value: "learning" },
  { key: 4, label: "Hobby", value: "hobby" },
  { key: 5, label: "Work Experience", value: "workExperience" },
];
