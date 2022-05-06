import styled from "@emotion/styled";

const FormHeader = styled.h2`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 36px;
  line-height: 1.33;
  color: var(--blue-navy);
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1rem;
  border-radius: 5px;
  height: 45%;
`;

const Label = styled.label`
  display: flex;
  text-align: start;
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: bold;
  opacity: 1;
  margin-inline-start: 4px;
  color: var(--blue-navy);
`;

const Input = styled.input`
  width: 100%;
  min-width: 0px;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  appearance: none;
  font-weight: 500;
  border-radius: 16px;
  font-size: 1rem;
  padding-inline-start: 0.8rem;
  height: 3rem;
  color: black;
  border-style: solid;
  border-width: 1px;
  border-image: none 100% / 1 / 0 stretch;
  border-color: #e0e5f2;
  margin-inline-start: 0px;

  margin-bottom: 24px;
  &::placeholder {
    color: #c0c5d1;
  }
`;

const Button = styled.button`
  display: inline-flex;
  appearance: none;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  position: relative;
  width: 100%;
  line-height: 1.2;
  border-radius: 16px;
  font-weight: 500;
  transition: all 0.25s ease 0s;
  box-sizing: border-box;
  height: 50px;
  border: none;
  background: #422afb;
  color: white;
  margin-bottom: 24px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    transition: all 0.25s ease 0s;
    background: #2b1ba8;
  }
`;

const Href = styled.a`
  color: #533efb;
  cursor: pointer;
`;

const Paragraph = styled.p`
  color: #c0c5d1;
`;

const style = {
  Button,
  Input,
  Form,
  FormHeader,
  Label,
  Paragraph,
  Href,
};

export { Input, Button, Form, Paragraph, FormHeader, Label, Href };
export default style;
