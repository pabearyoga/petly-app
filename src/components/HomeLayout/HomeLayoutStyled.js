import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')``;

export const Tittle = styled('h2')`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  color: ${({ theme }) => theme.palette.text.black};

  @media screen and (min-height: 1193px) {
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    font-size: 60px;
  }

  ${({ theme }) => theme.breakpoints.up('desktop')} {
    font-size: 68px;
  }
`;