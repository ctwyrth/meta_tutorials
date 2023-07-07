import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, keyframes } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: mmxvi.ctw@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ctwyrth",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/c-thomas-wyrth",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  let yMove = useRef(null);
  let lastYMove = 0;
  
  useEffect (() => {
    const handleScroll = () => {
      let currentYMove = window.scrollY;

      if (lastYMove - currentYMove < 0) {
        yMove.current.style.transform = "translateY(-200px)";
      } else if (lastYMove - currentYMove >= 0) {
        yMove.current.style.transform = "translateY(0px)";
      }
      lastYMove = currentYMove;
    }
    
    window.addEventListener("scroll", handleScroll);

    return () => { 
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={yMove}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="all"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={100}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials?.map((social, idx) => <a href={social.url} key={idx} target="_blank"><FontAwesomeIcon icon={social.icon} size="2x" /></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")}>Projects</a>
              <a onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
