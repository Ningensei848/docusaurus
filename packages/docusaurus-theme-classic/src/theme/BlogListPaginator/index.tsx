/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import type {Metadata} from '@theme/BlogListPage';

function BlogListPaginator(props: {readonly metadata: Metadata}): JSX.Element {
  const {metadata} = props;
  const {previousPage, nextPage} = metadata;

  return (
    <nav className="pagination-nav" aria-label="Blog list page navigation">
      <div className="pagination-nav__item">
        {previousPage && (
          <Link className="pagination-nav__link" to={previousPage}>
            <div className="pagination-nav__label">
              &laquo;{' '}
              <Translate
                id="theme.BlogListPaginator.newerEntries"
                description="The label used to navigate to the newer blog posts page (previous page)">
                Newer Entries
              </Translate>
            </div>
          </Link>
        )}
      </div>
      <div className="pagination-nav__item pagination-nav__item--next">
        {nextPage && (
          <Link className="pagination-nav__link" to={nextPage}>
            <div className="pagination-nav__label">
              <Translate
                id="theme.BlogListPaginator.olderEntries"
                description="The label used to navigate to the older blog posts page (next page)">
                Older Entries
              </Translate>{' '}
              &raquo;
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default BlogListPaginator;
