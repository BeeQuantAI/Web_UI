import { Col } from 'react-bootstrap';
import { Card, WidgetCardTitle } from '@/shared/components/Card';
import { colorDustyWhite, colorGray } from '@/styles/palette';
import {
  DashboardPortfolioCard,
  PortfolioCardDescription,
  PortfolioCardTitle,
} from './DashboardCardElements';
import styled from 'styled-components';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  centered?: boolean;
  theme?: string;
}

const TotalAssets = ({name, value, color}) => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <DashboardPortfolioCard>
    
      <WalletStatRowWrapper>
        <WidgetCardTitle>{name}</WidgetCardTitle>
        </WalletStatRowWrapper> 

        <WalletStatRowWrapper>
            <PortfolioCardDescription>Exchange</PortfolioCardDescription>
            <WalletStatRowValue>Binance</WalletStatRowValue>
        </WalletStatRowWrapper> 

        <WalletStatRowWrapper>
        <PortfolioCardDescription>Balance</PortfolioCardDescription>
        <PortfolioCardTitle color={color}>{value}</PortfolioCardTitle>
        </WalletStatRowWrapper>
      </DashboardPortfolioCard>
    </Card>
  </Col>
);

export default TotalAssets;

export const WalletStatRowWrapper = styled('div')`
margin-bottom: 12px;
`;

export const WalletStatRowTitle = styled('div')<CardTitleProps>`
  font-size: 13px;
  color: ${(props) => (props.theme === 'dark' ? colorDustyWhite : colorGray)};
  line-height: 1;
`;

export const WalletStatRowValue = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${colorDustyWhite};
  line-height: 1.1;
  
  .lnr {
    cursor: pointer;
  }
`;