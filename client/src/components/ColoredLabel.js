import styled from 'styled-components';

const ColoredLabel = styled.label`
  background-color: ${ props => props.primary ? 'green' : 'orange' };
  font-size: 20px;
`;

export default ColoredLabel;