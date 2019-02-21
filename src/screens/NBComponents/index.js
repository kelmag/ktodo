// ***Things I have't imlemented in this file
// Swipable List functionnality (applied with <List/>)
// Tabs, Scrollable Tabs & Advanced Tabs
// Thumbnail
// Toast Message with duration, position(Top || Bottom), Types, (with a button || Text)
// H1, H2, H3, (No h4, 5, 6!!)
// Drawer
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  ActionSheet,
  Icon,
  Card,
  CardItem,
  Body,
  Right,
  Left,
  Thumbnail,
  CheckBox,
  ListItem,
  Badge,
  View,
  Fab,
  Footer,
  FooterTab,
  Form,
  Item,
  Label,
  Input,
  Picker,
  Textarea,
  Title,
  Grid,
  Col,
  List,
  Row,
  Switch,
  Radio,
  Spinner,
  SwipeRow,
} from 'native-base';

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];

const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

const styles = EStyleSheet.create({
  container: {},
});

class NBComponents extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false, selected2: undefined };
  }

  onValueChange2 = (value: string) => {
    this.setState({
      selected2: value,
    });
  };

  render() {
    return (
      <Container>
        {/* <Header transparent>
          {/* we can do a <Header span>  */}
        {/* we can do a <Header noLeft> to hide inserted <Left/>  */}
        {/* we can do a <Header transparent> for transparency */}
        {/* <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header is this yaya</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header> */}
        {/* // Header with searchbar */}
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <View style={{ flex: 1 }}>
          <Content padder style={styles.container}>
            <ListItem>
              <CheckBox checked color="green" />
              <Body>
                <Text>Finish list Screen</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Button
                  // disabled
                  large
                  block
                  danger
                  rounded
                  bordered
                  onPress={() => ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: 'Testing ActionSheet',
                    },
                    (buttonIndex) => {
                      this.setState({ clicked: BUTTONS[buttonIndex] });
                    },
                  )
                  }
                >
                  <Text>Press me</Text>
                  <Icon name="trash" />
                </Button>
              </Body>
            </ListItem>
            <Card>
              <CardItem style={styles.container} bordered>
                <Text>Social links</Text>
              </CardItem>
              <CardItem style={styles.container}>
                <Left>
                  <Icon active name="logo-facebook" style={{ fontSize: 20, color: '#405798' }} />
                  <Text>Facebook</Text>
                </Left>
                <Right style={styles.container}>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

              <CardItem style={styles.container} primary>
                <Left>
                  <Icon active name="logo-googleplus" style={{ fontSize: 20, color: '#CE5A4B' }} />
                  <Text>Google Plus</Text>
                </Left>
                <Right style={styles.container}>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

              <CardItem footer>
                <Body style={styles.container}>
                  <Button
                    onPress={() => alert('This is Card Footer')}
                    small
                    block
                    danger
                    transparent
                  >
                    <Icon name="add" />
                  </Button>
                </Body>
              </CardItem>
            </Card>

            <Card style={{ flex: 0 }}>
              <CardItem bordered>
                <Left>
                  <Thumbnail
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Gulf_logo.png',
                    }}
                  />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: 'https://red.elbenwald.de/media/image/13/db/a2/manga_anime_cat.jpg',
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>Comment</Text>
                  </Button>
                </Body>
                <Right>
                  <Text note>11h ago</Text>
                </Right>
              </CardItem>
            </Card>

            <Form>
              {/*   Form in NativeBase is just a wrapper & has no onSubmit() . */}
              <Item floatingLabel>
                <Label>floatingLabel</Label>
                {/* should be alwayes wrapped within a form */}
                <Input />
              </Item>
              <Item fixedLabel>
                <Label>fixedLabel</Label>
                <Input />
              </Item>
              <Item inlineLabel>
                <Label>inlineLabel</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>stackedLabel</Label>
                <Input />
              </Item>
              <Item picker>
                {/* Include picker prop with <Item> to have picker type of input field. */}
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: '#bfc6ea' }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
              <Item regular>
                <Input placeholder="Regular Textbox" />
              </Item>
              <Item>
                <Input placeholder="Underline Textbox" />
              </Item>
              <Item rounded>
                <Input placeholder="Rounded Textbox" />
              </Item>
              <Item error>
                <Icon active name="home" />
                <Input placeholder="Icon Textbox" />
              </Item>
              <Item success>
                <Input placeholder="Icon Alignment in Textbox" />
                <Icon active name="swap" />
              </Item>
              <Item disabled>
                <Input disabled placeholder="Disabled Textbox" />
                <Icon name="information-circle" />
              </Item>
              <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </Form>
            <Spinner color="blue" />
            <Icon
              type="FontAwesome"
              name="share-alt"
              style={{ fontSize: 40, color: '#3A71C2', alignSelf: 'center' }}
            />
            <Grid>
              {/* if using <Row /> inside a <ScrollView />, the height of the component would be flexible according to the content, though you can always apply the height styling.
              NativeBase <Content> component uses <ScrollView>. This is required by <Col> and <Row> elements of Easy-Grid to have a defined height. */}
              <Row style={{ backgroundColor: '#437E9F', height: 300 }}>
                <Col style={{ backgroundColor: '#635DB7', height: 200 }} />
                <Col style={{ backgroundColor: '#00CE9F', height: 300 }} />
              </Row>
              <Row style={{ marginTop: 5, backgroundColor: '#D4503D' }}>
                <Col>
                  <Row style={{ marginTop: 5, backgroundColor: '#BA965D', height: 200 }} />
                  <Row style={{ marginTop: 5, backgroundColor: '#5889EC' }}>
                    <Col style={{ backgroundColor: '#D84AF2', height: 100 }} />
                    <Col style={{ backgroundColor: '#F2DE4E', height: 200 }} />
                    <Col style={{ backgroundColor: '#00CE9F', height: 150 }}>
                      <Text>Yo</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Text>this shows</Text>
                  </Row>
                </Col>
              </Row>
            </Grid>

            <List>
              {/*  Special chars => HTML Codes Table */}
              <ListItem itemDivider>
                <Text>A</Text>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>This is a &lt;ListItem&gt; inside &lt;List&gt;</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem itemDivider>
                <Text>Special chars (&amp;lt) gives (&lt;)</Text>
              </ListItem>
              <ListItem selected>
                <Text>and I'm awesome</Text>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: '#FF9501' }}>
                    <Icon active name="airplane" />
                  </Button>
                </Left>
                <Body>
                  <Text>Airplane Mode</Text>
                </Body>
                <Right>
                  <Switch value={false} />
                </Right>
              </ListItem>
            </List>
            <ListItem>
              <Left>
                <Text>Daily Stand Up</Text>
              </Left>
              <Right>
                <Radio selected={false} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Discussion with Client</Text>
              </Left>
              <Right>
                <Radio selected />
              </Right>
            </ListItem>

            <SwipeRow
              leftOpenValue={75}
              rightOpenValue={-75}
              left={(
                <Button success onPress={() => alert('Add')}>
                  <Icon active name="add" />
                </Button>
)}
              body={(
                <View>
                  <Text>SwipeRow Body Text</Text>
                </View>
)}
              right={(
                <Button danger onPress={() => alert('Trash')}>
                  <Icon active name="trash" />
                </Button>
)}
            />
          </Content>

          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
        <Footer>
          <FooterTab>
            <Button>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default NBComponents;
