import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Consultation from '@/components/Consultation';

export const metadata = {
  title: '联系我们 - 企智引擎',
  description: '联系企智引擎，获取AI服务咨询。电话：18599965557（刘）、15108209229（吴）',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
