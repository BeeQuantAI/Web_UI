import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge, Col, Collapse } from 'react-bootstrap';
import CloseIcon from 'mdi-react/CloseIcon';
import MinusIcon from 'mdi-react/MinusIcon';
import AutorenewIcon from 'mdi-react/AutorenewIcon';
import {
 Card, CardBody, CardSubhead, CardTitle, CardTitleWrap, 
} from '@/shared/components/Card';
import SimpleLoader from '@/shared/components/SimpleLoader';
import {
  colorAccent,
  colorAdditional,
  colorBackground,
  colorBlue,
  colorRed,
  colorText,
  colorWhite,
  colorYellow,
} from '@/styles/palette';
import {
 left, marginLeft, marginRight, paddingLeft, paddingRight, right, 
} from '@/styles/directions';

const Panel = ({
  md, lg, xl, xxl, sm, xs, color, divider, icon, title, label, subhead, before,
  className, children, isLoading, refreshRequest, panelFooter, extraPanelButton,
}) => {
  const [visible, setVisible] = useState(true);
  const [collapse, setCollapse] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const onDismiss = () => {
    setVisible(false);
  };

  const toggleCollapse = () => {
    setCollapse(prevState => !prevState);
  };

  const fakeRefresh = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 5000);
  };

  if (visible) {
    return (
      <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs} xxl={xxl}>
        <PanelCard
          collapse={!collapse}
          color={color}
          divider={divider}
          className={className}
        >
          <PanelCardBody>
            {refresh || isLoading ? <PanelRefresh><SimpleLoader /></PanelRefresh> : ''}
            <PanelCardHeader>
              <PanelCardTitleWrap>
                <PanelCardTitle>
                  {icon && <PanelIcon className={`lnr lnr-${icon}`} />}
                  {title}
                  <PanelLabel bg="custom">{label}</PanelLabel>
                </PanelCardTitle>
                <PanelCardSubhead>{subhead}</PanelCardSubhead>
              </PanelCardTitleWrap>

              <PanelButtons isExtraBtn={extraPanelButton !== null}>
                <PanelButton
                  type="button"
                  onClick={refreshRequest || fakeRefresh}
                >
                  <AutorenewIcon />
                </PanelButton>
              </PanelButtons>
              {extraPanelButton && <PanelExtraButtons>{extraPanelButton}</PanelExtraButtons>}
            </PanelCardHeader>

            <Collapse in={collapse}>
              <PanelContentWrapper>
                <PanelContent>
                  {children}
                </PanelContent>
                {panelFooter && <PanelContent>{panelFooter}</PanelContent>}
              </PanelContentWrapper>
            </Collapse>
          </PanelCardBody>
        </PanelCard>
        {before}
      </Col>
    );
  }

  return '';
};

Panel.propTypes = {
  divider: PropTypes.bool,
  color: PropTypes.string,
  title: PropTypes.string,
  subhead: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  xxl: PropTypes.number,
  before: PropTypes.element,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  refreshRequest: PropTypes.func,
  children: PropTypes.node.isRequired,
  panelFooter: PropTypes.node,
  extraPanelButton: PropTypes.node,
};

Panel.defaultProps = {
  divider: false,
  color: '',
  title: '',
  subhead: '',
  label: '',
  icon: '',
  md: 0,
  lg: 0,
  xl: 0,
  sm: 0,
  xs: 0,
  xxl: 0,
  before: null,
  className: '',
  isLoading: false,
  refreshRequest: null,
  panelFooter: null,
  extraPanelButton: null,
};

export default Panel;

export const PanelTitle = ({ title }) => (
  <PanelCardTitleWrap>
    <PanelCardTitle>
      {title}
    </PanelCardTitle>
  </PanelCardTitleWrap>
);

PanelTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

// region STYLES

const PanelCardBody = styled(CardBody)`
  position: relative;
  ${paddingRight}: 30px;
  ${paddingLeft}: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  transition: height 0.3s;
  
  display: flex;
  flex-direction: column;

  @media(max-width: 767px) {
    ${paddingRight}: 15px;
    ${paddingLeft}: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const PanelButtons = styled.div`
  top: ${({ isExtraBtn }) => (isExtraBtn ? '15px' : '30px')};
  ${right}: 30px;
  z-index: 1;
  
  order: 3;
  flex-basis: 57px;
  flex-shrink: 0;
  
  @media(max-width: 767px) {
    order: 2;
    align-self: flex-start;
  }
`;

const PanelExtraButtons = styled('div')`
  margin-top: -10px;
  @media(max-width: 767px) {
    margin-top: 0;
    order: 3;
    flex-basis: 100%;
  }
`;

const PanelButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  ${marginLeft}: 5px;

  svg {
    width: 14px;
    height: 14px;
    fill: ${colorAdditional};
  }

  &:focus {
    outline: none;
  }
  
  &:hover,
  &:focus,
  &:active {
    
    svg {
      fill: ${colorAccent};
    }
  }
`;

const PanelCardTitleWrap = styled(CardTitleWrap)`
  margin-bottom: 0;
  text-transform: uppercase;
  transition: 0.3s;
  margin-top: 0 !important;
  
  flex-basis: 60%;
`;

const PanelCardTitle = styled(CardTitle)`
  font-size: 13px;
`;

const PanelCardSubhead = styled(CardSubhead)`
  text-align: ${left};
  text-transform: none;
  font-size: 12px;
  line-height: 18px;
  color: ${colorAdditional};
  opacity: 0.7;
  transition: 0.3s;
  margin: 0;
`;

const PanelRefresh = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  ${left}: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    top: 0;
    ${left}: 0;
    border-radius: 5px;
    background-color: ${colorBackground};
    opacity: 0.8;
  }

  svg {
    position: absolute;
    top: calc(50% - 24px);
    ${left}: calc(50% - 24px);
  }
`;

const PanelLabel = styled(Badge)`
  background-color: ${colorAccent};
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 13px;
  padding: 3px 10px;
  ${left}: 100%;
  ${marginLeft}: 10px;
`;

const PanelIcon = styled.span`
  display: inline-block;
  ${marginRight}: 5px;
`;

const PanelContent = styled.div`

`;

const PanelContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PanelCardHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  gap: 25px;
  
  ${PanelCardTitleWrap} {
    flex-grow: 2;
  }

  @media(max-width: 767px) {
    flex-wrap: wrap;
    gap: 5px;
    row-gap: 20px;
  }
`;

const getColor = (color) => {
  switch (color) {
    case 'primary':
      return colorBlue;
    case 'success':
      return colorAccent;
    case 'warning':
      return colorYellow;
    case 'danger':
      return colorRed;
    default:
      return 'transparent';
  }
};

const PanelCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['collapse', 'divider'].includes(prop),
})`
  transition: 0.3s;

  ${props => props.collapse && `
    height: ${props.color ? 72 : 108}px;
    
    ${PanelCardHeader} {
      margin-bottom: 0;
    }
        
    ${props.divider && `
      ${PanelCardSubhead} {
        opacity: 0;
      }
    `}

    ${PanelCardBody} {
      padding-top: 35px;
      padding-bottom: 35px;
    }
    
    ${PanelExtraButtons} {
      opacity: 0;
    }
  `}

  ${props => props.divider && `

    ${PanelContent} {
      text-align: ${left(props)};
      padding-top: 0;
      padding-bottom: 40px;

      .tabs--bordered-bottom {
        
        .nav-item {
          border-bottom: 1px solid #dee2e6;
          
          .nav-link {
            background-color: ${colorBackground};
            color: ${colorText};
          }
        }
      }
    }
  `}

  ${props => props.color && `
    ${PanelCardBody} {
      padding: 0;
    }

  ${PanelCardHeader} {
    ${paddingRight(props)}: 40px;
    ${paddingLeft(props)}: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
  
    ${PanelCardTitleWrap} {
      h5 {
        color: white;
      }
    }

    ${PanelButtons} {
      top: 13px;

      svg {
        fill: ${colorWhite};
      }
      
      ${PanelButton} {
      
        &:hover,
        &:focus,
        &:active {
          fill: ${colorWhite};
        }
      }
    }

    ${PanelContent} {
      ${paddingRight(props)}: 35px;
      ${paddingLeft(props)}: 30px;
      padding-top: 0;
      padding-bottom: 40px;
    }
  `}

  ${PanelCardHeader} {
    background-color: ${props => getColor(props.color)};
  }
`;

// endregion
