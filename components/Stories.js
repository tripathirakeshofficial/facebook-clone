import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Rakesh Tripathi",
    src: "https://scontent.fccu10-1.fna.fbcdn.net/v/t1.6435-9/197606152_10219112903760147_8918802761366193011_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_276KmaWXxEAX9Lbaik&_nc_ht=scontent.fccu10-1.fna&oh=07c7735486e175e24db4a88ec7369947&oe=60E6D4ED",
    profile:
      "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10219120061819094&height=50&width=50&ext=1625826569&hash=AeSfPTo5K9BJnxzopPo",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
