'use client';
import { useRouter } from 'next/navigation';
import { navData } from '@/data';
import { NavbarV2, theme } from 'ecommerce-mxtech';
import { useInformation } from '@/store/useInformation';

const { useToken } = theme;

const Navbar = () => {
  const { dataSite } = useInformation();
  const router = useRouter();
  const {
    token: { colorPrimary },
  } = useToken();

  return (
    <NavbarV2
      linksProps={{
        variant: 'button',
        align: 'right',
      }}
      textColor='black'
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: 'w-36',
      }}
      styleTitle={{
        fontWeight: 'bold',
        fontSize: 16,
      }}
      positionName='right'
      positionCart='left'
      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push('/my-cart'),
      }}
      buttonContactProps={{
        onClick: () => router.push('/more-information'),
      }}
      onRedirect={(path) => router.push(path)}
      onSearch={(value) => {}}
      stylesContentLink={{
        backgroundColor: '#F3F3F3FF',
      }}
    />
  );
};

export default Navbar;
