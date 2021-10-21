import React from "react";
import { Button, Icon, Input } from "semantic-ui-react";

const ButtonExampleLabeledBasicShorthand = () => (
  <div>
    {/* 라벨, 포크 버튼 */}
    <Button
      color="red"
      content="Like"
      icon="heart"
      label={{ basic: true, color: "red", pointing: "left", content: "2,048" }}
    />
    <Button
      basic
      color="blue"
      content="Fork"
      icon="fork"
      label={{
        as: "a",
        basic: true,
        color: "blue",
        pointing: "left",
        content: "2,048",
      }}
    />

    {/* 기본 버튼 */}
    <Button basic>Standard</Button>
    <Button basic color="red">
      Red
    </Button>
    <Button basic color="orange">
      Orange
    </Button>
    <Button basic color="yellow">
      Yellow
    </Button>
    <Button basic color="olive">
      Olive
    </Button>
    <Button basic color="green">
      Green
    </Button>
    <Button basic color="teal">
      Teal
    </Button>
    <Button basic color="blue">
      Blue
    </Button>
    <Button basic color="violet">
      Violet
    </Button>
    <Button basic color="purple">
      Purple
    </Button>
    <Button basic color="pink">
      Pink
    </Button>
    <Button basic color="brown">
      Brown
    </Button>
    <Button basic color="grey">
      Grey
    </Button>
    <Button basic color="black">
      Black
    </Button>

    {/* Or 버튼 */}
    <Button.Group>
      <Button>One</Button>
      <Button.Or />
      <Button>Two</Button>
      <Button.Or />
      <Button>Three</Button>
    </Button.Group>

    {/* SNS 버튼 */}
    <Button color="facebook">
      <Icon name="facebook" /> Facebook
    </Button>
    <Button color="twitter">
      <Icon name="twitter" /> Twitter
    </Button>
    <Button color="google plus">
      <Icon name="google plus" /> Google Plus
    </Button>
    <Button color="vk">
      <Icon name="vk" /> VK
    </Button>
    <Button color="linkedin">
      <Icon name="linkedin" /> LinkedIn
    </Button>
    <Button color="instagram">
      <Icon name="instagram" /> Instagram
    </Button>
    <Button color="youtube">
      <Icon name="youtube" /> YouTube
    </Button>

    {/* BackColor 버튼 */}
    <Button color="red">Red</Button>
    <Button color="orange">Orange</Button>
    <Button color="yellow">Yellow</Button>
    <Button color="olive">Olive</Button>
    <Button color="green">Green</Button>
    <Button color="teal">Teal</Button>
    <Button color="blue">Blue</Button>
    <Button color="violet">Violet</Button>
    <Button color="purple">Purple</Button>
    <Button color="pink">Pink</Button>
    <Button color="brown">Brown</Button>
    <Button color="grey">Grey</Button>
    <Button color="black">Black</Button>

    <Button icon="like" />
    <Button>
      <Icon name="like" />
    </Button>
    {/* 💡 'color' and 'name' will be used as <Icon /> element's props */}
    <Button content="Like" icon={{ color: "red", name: "like" }} />
    {/* 💡 you can also add handlers and any DOM props to shorthands */}
    <Input
      action={{
        icon: "search",
        onClick: () => console.log("An action was clicked!"),
      }}
      actionPosition="left"
      placeholder="Search..."
    />
  </div>
);

export default ButtonExampleLabeledBasicShorthand;
