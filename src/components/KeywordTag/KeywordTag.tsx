import React from 'react';
import styled from 'styled-components';

interface KeywordTagProps {
  keyword: string;
  // 필요한 props와 그들의 타입을 여기에 추가하세요
}

export default function KeywordTag(props: KeywordTagProps): React.ReactElement {
  return <Tag>{props.keyword}</Tag>;
}

const Tag = styled.div`
  /* Rectangle 9 */
  padding-left: 25px;
  padding-right: 25px;
  display: inline-block;
  min-width: 108px;
  height: 71.64px;
  background: #ffffff;
  border-radius: 14px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

  /* 토끼 */
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 71.64px;
  text-align: center;
  color: #000000;
`;
