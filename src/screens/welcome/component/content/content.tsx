import {Vcontainer, Text} from '@/component';
const contentScreen = (props: {title: string; subtitle: string}) => {
  const {title, subtitle} = props;
  return (
    <Vcontainer alignType="center" justify="center">
      <Text TextMode="TextH1Title">{title}</Text>
      <Text>{subtitle}</Text>
    </Vcontainer>
  );
};

export default contentScreen;
