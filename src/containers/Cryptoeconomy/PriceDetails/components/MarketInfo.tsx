import Panel from '@/shared/components/Panel';
import { colorAdditional, colorAdditionalHover, colorDarkText } from '@/styles/palette';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MarketInfo = ({ dir }) => {
  return (
    <Panel xs={12} lg={12} xxl={12} title='Market Info'>
      <WalletInfoWrapper>
        <WalletStatRowWrapper>
        <WalletStatRowTitle>All Time High (USD)</WalletStatRowTitle>
        <WalletStatRowValue>$72863.23</WalletStatRowValue>
        </WalletStatRowWrapper>
        <WalletStatRowWrapper>
          <WalletStatRowTitle>Circulating Supply</WalletStatRowTitle>
          <WalletStatRowValue>19760912</WalletStatRowValue>
        </WalletStatRowWrapper>
        <WalletStatRowWrapper>
          <WalletStatRowTitle>Total Supply</WalletStatRowTitle>
          <WalletStatRowValue>19760912</WalletStatRowValue>
        </WalletStatRowWrapper>
        <WalletStatRowWrapper>
          <WalletStatRowTitle>Max supply</WalletStatRowTitle>
          <WalletStatRowValue>21000000</WalletStatRowValue>
        </WalletStatRowWrapper>
      </WalletInfoWrapper>
    </Panel>
  );
};

MarketInfo.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default MarketInfo;


export const WalletInfoWrapper = styled('div')`
  display: flex;
   flex-wrap: wrap;

  > div {
    margin-bottom: 15px;
    margin-right: 25px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const WalletStatRowWrapper = styled('div')`
  > * {
    &:not(:last-child) {
      margin-bottom: 8px;
    } 
  }
`;

export const WalletStatRowTitle = styled('div')`
  font-size: 13px;
  color: ${colorAdditional};
  line-height: 1;
`;

export const WalletStatRowValue = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  font-size: ${({ variant }) => (variant === 'small' ? '16px' : '24px')};
  color: ${colorDarkText};
  line-height: 1.1;
  
  .lnr {
    cursor: pointer;
  }
`;

export const WalletConnection = styled('button')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  padding: 0;
  color: ${colorAdditional};
  transition: color .2s;
  
  &:hover {
    color: ${colorAdditionalHover}
  }
`;