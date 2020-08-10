import React, { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../icons/left.svg";
import { ReactComponent as RightIcon } from "../icons/right.svg";
import { PaginationType } from "../models/model";
import classNames from "classnames";
import { useQuery } from "../utils/util";

const videoPerPage = 12;

interface PropType {
  total?: number;
  current?: number;
}

const Pagination = ({ total = 0, current = 1 }: PropType) => {
  const [pagination, setPagination] = useState<PaginationType>();
  const { url } = useRouteMatch();
  const query = useQuery().get("q") || "";

  useEffect(() => {
    const last = Math.ceil((total * 1.0) / videoPerPage);
    const prev = current - 1;
    const next = current + 1;

    let pages: number[];
    if (current < 3) {
      pages = [1, 2, 3, 4, 5];
    } else if (last - current < 2) {
      pages = [last - 4, last - 3, last - 2, last - 1, last];
    } else {
      pages = [current - 2, current - 1, current, current + 1, current + 2];
    }

    const links = pages
      .filter((p) => p > 0 && p <= last)
      .map((page) => {
        return {
          page,
          selected: current === page,
        };
      });

    setPagination({ last, prev, next, links });
  }, [total, current]);

  const getUrl = (p: number | undefined): string => {
    return `${url}?${query && "q=" + query + "&"}p=${p}`;
  };

  return (
    <nav className="pagination">
      <NavLink to={url} isActive={() => current > 1}>
        First
      </NavLink>
      <NavLink to={getUrl(pagination?.prev)} isActive={() => current > 1}>
        <LeftIcon />
      </NavLink>
      {pagination?.links.map((link) => (
        <NavLink
          to={getUrl(link.page)}
          key={link.page}
          className={classNames({
            number: true,
            selected: current === link.page,
          })}
        >
          {link.page}
        </NavLink>
      ))}
      <NavLink
        to={getUrl(pagination?.next)}
        isActive={() => !!pagination?.last && current < pagination?.last}
      >
        <RightIcon />
      </NavLink>
      <NavLink
        to={getUrl(pagination?.last)}
        isActive={() => !!pagination?.last && current < pagination?.last}
      >
        Last
      </NavLink>
    </nav>
  );
};

export default Pagination;
