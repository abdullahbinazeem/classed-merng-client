import React from "react";
import { Card, Icon, Image, Header } from "semantic-ui-react";

const AutoBiographies = () => (
  <div className="section autobio">
    <Header as="h1" className="title">
      Character AutoBiographies
    </Header>
    <Card.Group itemsPerRow={3} stretched doubling stackable>
      <Card
        className="cards"
        header="Macbeth"
        color="red"
        image="https://freesvg.org/img/ShakespeareMacbeth.png"
        description="Macbeth is a strong soldier who let his wife's ambitions get in the way of his moral values. When Macbeth was Manipulated into killing the king he started to shift from his kind and fearful self to a more murderess and evil personality.  Evil could be seen as an understatement as Macbeth was more despicable, killing his best friend and everyone else that stood in his way of becoming king. He wasn't killed easily, showing his ambition in fighting to the end.
  
"
      />
      <Card
        className="cards"
        header="Lady Macbeth"
        color="green"
        image="https://freesvg.org/img/ShakespeareLadyMacbeth.png"
        description="   Lady Macbeth was a strong, courageous character that would do anything to make her dream of being queen come true. When I say anything, I mean it. She would go to lengths such as unsexing herself and manipulating her husband to get what she wanted. Although she was strong she wasn't strong enough to stay at the top of the royalty chain as she let her emotions get the best of her and bring her to an early death by suicide. "
      />
      <Card
        className="cards"
        header="Banquo"
        color="blue"
        image="https://pbs.twimg.com/profile_images/806911827636527104/o6wuuAKf_400x400.jpg"
        description="Banquo is a strong and courageous warier with the goal of being a good father and a good servant to the king. Although he was killed early on in the play we still got to see his desire to protect his family. He showed his loyalty when he refused to help Macbeth kill Duncan, and his passion for his family was shown when he died protecting his kid Fleance."
      />
      <Card
        className="cards"
        header="Duncan"
        color="orange"
        image="https://pbs.twimg.com/media/DRX3f3tV4AEZWjv.jpg"
        description="Duncan is the original king that was loved by everyone, but he was also the most obvious king we had. He struggled to see that the ones that were closest to him were his biggest enemies.his lack of awareness was so bad that it would lead to getting himself killed by the ones he trusted the most."
      />
      <Card
        className="cards"
        header="Three Witches"
        color="purple"
        image="https://media.istockphoto.com/id/163910968/pl/wektor/trzy-witches.jpg?s=612x612&w=0&k=20&c=V1HLasOe_BGG9MBR-l5texea3mJ5IODQeBrHGa6lHwU="
        description="We only see the three witches a couple of times in the play, but when we see the witches, they are always making chaos with detailed messages to Macbeth that leave him distressed. So every time you see the three witches be prepared for disorder and exciting plot twists.     "
      />
      <Card
        className="cards"
        header="Malcolm"
        color="grey"
        image="https://pbs.twimg.com/profile_images/990693309168271360/WhXTqfmA_400x400.jpg"
        description="Malcome is one of Duncan's sons, he was made prince of Cumberland at the beginning of the play, but When his time came to be king we got to see his true personality. He is a quirky and nerdy guy who made up every excuse as to why he can't be king."
      />
      <Card
        className="cards"
        header="Macduff"
        color="pink"
        image="https://ichef.bbci.co.uk/images/ic/448xn/p0clbk2l.png"
        description="  Macduff is a strong Scottish warrior with the goal of avenging Duncan's death. He is mentally tough too as when he heard that his family was killed he was able to use his anger for good by stopping Macbeth’s rain. Macduff is one of the most loyal people in the play and he always had the drive to do good for his country and for everyone who lives in it. "
      />
    </Card.Group>
  </div>
);

export default AutoBiographies;
