import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const DefaultPageTemplate = ({
  title,
  content,
  contentComponent,
  helmet,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="u-site__content">
      {helmet || ''}
      <h2 className="u-site__title">
        {title}
      </h2>
      <PageContent className="t-md" content={content} />
    </section>
  );
};

DefaultPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DefaultPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <DefaultPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      helmet={<Helmet title={`${post.frontmatter.title}`} />}
      content={post.html}
    />
  );
};

DefaultPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultPage;

export const defaultPageQuery = graphql`
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;