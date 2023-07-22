import classes from "./AvailableDetails.module.css";

import IndividualData from "./Layout/IndividualData/IndividualData";

const AvailableDetails = (props) => {
  const DummyData = [
    {
      createdAt: "2023-07-17T05:32:09.793Z",
      name: "Leroy O'Hara",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/838.jpg",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      tags: ["red", "blue", "green", "yellow", "cyan"],
      id: "1",
    },
    {
      createdAt: "2023-07-17T04:42:11.333Z",
      name: "Kathy Langosh",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/619.jpg",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      tags: ["red", "blue", "green", "pink"],
      id: "2",
    },
    {
      createdAt: "2023-07-17T05:48:14.091Z",
      name: "Marie Koepp",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/747.jpg",
      description:
        "Ergonomic executive chair upholsteredin bonded black leather and PVC padded seat and back for all-day comfort and support",
      tags: ["red", "blue", "green"],
      id: "3",
    },
    {
      createdAt: "2023-07-17T05:37:53.580Z",
      name: "Hugo Adams",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/273.jpg",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      tags: ["red", "blue", "green", "cyan"],
      id: "4",
    },
    {
      createdAt: "2023-07-17T04:46:47.106Z",
      name: "Christie Goldner",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/117.jpg",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      tags: ["red", "blue", "pink"],
      id: "5",
    },
    {
      createdAt: "2023-07-17T07:08:54.544Z",
      name: "Alvin Wilkinson",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/605.jpg",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      tags: ["red", "blue", "green", "cyan"],
      id: "6",
    },
    {
      createdAt: "2023-07-17T01:04:47.559Z",
      name: "Mrs. Carole Torp",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1195.jpg",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      tags: ["red", "blue", "green", "yellow", "pink"],
      id: "7",
    },
    {
      createdAt: "2023-07-17T01:58:18.406Z",
      name: "Fredrick Homenick V",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/5.jpg",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      tags: ["red", "blue", "green", "pink"],
      id: "8",
    },
    {
      createdAt: "2023-07-16T14:00:36.819Z",
      name: "Terrell Kessler",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/38.jpg",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      tags: ["red", "blue", "green", "yellow"],
      id: "9",
    },
    {
      createdAt: "2023-07-17T08:23:37.184Z",
      name: "Ms. Raul Kovacek",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/436.jpg",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      tags: ["pink", "blue"],
      id: "10",
    },
  ];

  const filteredCards = props.selectedColor
    ? DummyData.filter((data) => data.tags.includes(props.selectedColor))
    : DummyData;

  return (
    <div>
      <section className={classes.data}>
        <ul>
          {filteredCards.map((data) => (
            <IndividualData
              key={data.id}
              name={data.name}
              avatar={data.avatar}
              description={data.description}
              tags={data.tags}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AvailableDetails;
