import {Vcontainer, Text} from '@/component';
const contentScreen = (props: {title: string; subtitle: string}) => {
  const {title, subtitle} = props;
  return (
    <>
      <Text TextMode="TextH1Title">{title}</Text>
      <Text>{subtitle}</Text>
    </>
  );
};

export default contentScreen;
