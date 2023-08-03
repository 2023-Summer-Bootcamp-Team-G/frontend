import styled from 'styled-components';

type KeywordTagProps = {
  title: string;
};

export default function KeywordTag({ title }: KeywordTagProps) {
  return (
    <Tag>
      <Text>{title}</Text>
    </Tag>
  );
}

const Tag = styled.div`
  /* Rectangle */
  padding: 0 1.56rem;
  display: inline-block;
  min-width: 4rem;
  min-height: 3rem;
  margin: 0.75rem;
  background: #ffffff;
  border-radius: 0.875rem;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Text = styled.div`
  font-size: 1.25rem;
  line-height: 3.4rem;
  text-align: center;
`;
