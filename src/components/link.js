
import NextLink from 'next/link';/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import { HiOutlineChevronRight } from 'react-icons/hi';

export function NavLink({ path, label, children, ...rest }) {
  const isInternalLink = path && path.startsWith('/');

  return isInternalLink ? (
    <NextLink href={path} passHref>
      <A {...rest} className="nav-item" sx={{
        textDecoration: "none", 
        color: "black", 
        '&:hover': {
          color: '#FFC059',
        }
      }}
      activeClass="active"
      >
        {label}
      </A>
    </NextLink>
  ) : (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item" sx={{
        textDecoration: "none", 
        color: "black", 
        '&:hover': {
          color: '#FFC059', // Change the hover color to blue or any other color
        }
      }}
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
       <A sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'} <HiOutlineChevronRight />
      </A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
      ml: '3px',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
