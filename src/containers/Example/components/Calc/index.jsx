import React from 'react';
import {
  FormGroup,
  FormText,
  Label,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'reactstrap';

import { Container } from './styles';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpenCurrency1: false,
      dropdownOpenCurrency2: false,
      dropdownOpenPayment: false,
      dropdownOpenPaymentMethod: false,
    };
  }

  toggleDropDownCurrency1 = () => {
    const { dropdownOpenCurrency1 } = this.state;
    this.setState({
      dropdownOpenCurrency1: !dropdownOpenCurrency1,
    });
  };

  toggleDropDownCurrency2 = () => {
    const { dropdownOpenCurrency2 } = this.state;
    this.setState({
      dropdownOpenCurrency2: !dropdownOpenCurrency2,
    });
  };

  toggleDropDownPayment = () => {
    const { dropdownOpenPayment } = this.state;
    this.setState({
      dropdownOpenPayment: !dropdownOpenPayment,
    });
  };

  toggleDropDownPaymentMethod = () => {
    const { dropdownOpenPaymentMethod } = this.state;
    this.setState({
      dropdownOpenPaymentMethod: !dropdownOpenPaymentMethod,
    });
  };

  render() {
    const {
      dropdownOpenPaymentMethod, dropdownOpenCurrency1, dropdownOpenCurrency2, dropdownOpenPayment,
    } = this.state;
    return (
      <div>
        <Row>
          <Col md={12}>
            <h3 className="page-title">Calcular</h3>
          </Col>
        </Row>
        <Container>
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={dropdownOpenCurrency1}
            toggle={this.toggleDropDownCurrency1}
          >
            <DropdownToggle caret>Real</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <h3 className="page-title">&rarr; </h3>
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={dropdownOpenCurrency2}
            toggle={this.toggleDropDownCurrency2}
          >
            <DropdownToggle caret>USD</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>CAD</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>BRL</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </Container>
        <br />
        <Container>
          <h3 className="page-title">1 BRL</h3>
          <h3 className="page-title">&rarr; </h3>
          <h3 className="page-title">2.890 USD</h3>
        </Container>
        <Container>
          <h3 className="page-title">Você deseja:</h3>
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={dropdownOpenPaymentMethod}
            toggle={this.dropdownOpenPaymentMethod}
          >
            <DropdownToggle caret>Comprar</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Comprar</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Vender</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </Container>
        <Container>
          <h3 className="page-title">Forma de Pagamento</h3>
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={dropdownOpenPayment}
            toggle={this.toggleDropDownPaymentMethod}
          >
            <DropdownToggle caret>Cartão</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Cartão</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Dinheiro</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </Container>
        <FormGroup>
          <Label for="exampleEmail">Insira valor em BRL:</Label>
          <Input />
          {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <Button color="success" size="lg" block>
          CALCULAR
        </Button>
      </div>
    );
  }
}
