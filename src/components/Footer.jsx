import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <img src="../img/education.jpg"  alt="logo" />
          <ul>
            <li>Gilbert street, 6th Floor, NY</li>
            <li> +1 (571) 360 66 77</li>
            <li>contact@bozkaya.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us </li>
          </ul>
        </Flex>

        <p>&copy; 2023 Bozkaya. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
