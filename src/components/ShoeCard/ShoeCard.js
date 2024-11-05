import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt='' src={imageSrc} />
          {variant === 'new-release' && (
            <JustReleasedTag>
              <TagLabel>Just Released!</TagLabel>
            </JustReleasedTag>
          )}
          {variant === 'on-sale' && (
            <SalesTag>
              <TagLabel>Sales</TagLabel>
            </SalesTag>
          )}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price salePrice={salePrice}>{formatPrice(salePrice || price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePrice && <SalePrice>{formatPrice(price)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const SalesTag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  width: 49px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 2px;
  background: ${COLORS.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagLabel = styled.span`
  color: ${COLORS.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const JustReleasedTag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  width: 118px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 2px;
  background: ${COLORS.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: ${(props) => (props.salePrice ? COLORS.gray[700] : COLORS.gray[900])};
  text-decoration-line: ${(props) => (props.salePrice ? 'line-through' : 'none')};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
