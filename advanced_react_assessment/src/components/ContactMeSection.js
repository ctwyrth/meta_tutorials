import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) onOpen(response.type, response.message);
    if (response?.type === 'success') formik.resetForm();
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .min(2, "First Name must be at least 2 characters.")
        .required("This is a required field."),
      email: Yup.string()
        .email("Please provide a valid email address.")
        .required("This is a required field."),
      type: Yup.string()
        .required("This is a required field."),
      comment: Yup.string()
        .trim()
        .min(10, "Please provide more information in your comment.")
        .required("This is a required field."),
    }),
    onSubmit: (values) => {
      let url = "https://littlelemon.com";

      submit(url, values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" px={32} py={8} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!formik.errors.firstName || !formik.touched.firstName ? false : true}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName ? <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> : null}
              </FormControl>
              <FormControl isInvalid={!formik.errors.email || !formik.touched.email ? false : true}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage> : null}
              </FormControl>
              <FormControl isInvalid={!formik.errors.type || !formik.touched.type ? false : true}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}
                >
                  <option value="">Please choose an inquiry type.</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type ? <FormErrorMessage>{formik.errors.type}</FormErrorMessage> : null}
              </FormControl>
              <FormControl isInvalid={!formik.errors.comment || !formik.touched.comment ? false : true}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.comment && formik.errors.comment ? <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> : null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit {isLoading ? ` 🔄` : null}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
