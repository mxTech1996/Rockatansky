'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  FeaturesV2,
  Features,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { primaryColor } from '@/data';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  console.log(dataSite);
  return (
    <main
      style={{
        backgroundColor: '#E6E6E6FF',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          variant='background-img'
          src={dataSite.image_hero}
          colorText='white'
          title={dataSite.subtitle}
          description={dataSite.description}
          srcSecondary={dataSite.image_hero2}
          withSubView
          images={[dataSite.image_hero, dataSite.image_hero2]}
          styleTextSecondSection={{
            color: 'black',
          }}
          withShadowText
          contentThirdSection={
            <div
              className='flex flex-col px-40'
              style={{
                zIndex: 2,
              }}
              id='our-services'
            >
              <Features
                gridColumns={2}
                backgroundColor={primaryColor}
                features={dataSite.services}
                variant='card'
                textColor='white'
              />
            </div>
          }
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col px-48' id='know-us'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions
            backgroundColor={'transparent'}
            data={dataSite.info}
            bordered={false}
            borderRadius={20}
            gridColumns={1}
            variant='card'
          />
        </div>

        <div id='courses'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='All Courses'
              gridColumns={2}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='1'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#FBFBFB'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='text'
            variant='carousel'
            backgroundColor='#E0E0E0FF'
            references={dataSite.references}
            gridColumns={2}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
