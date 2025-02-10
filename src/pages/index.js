import React from 'react';
import Layout from '@theme/Layout'; // Import Layout từ Docusaurus
import PureHero from '@site/src/components/PureHero/PureHero';
import TwoColumnSection from '@site/src/components/TwoColumnSection/TwoColumnSection';


const HomePage = () => {
    return (
        <Layout title="Trang chủ" description="Học hỏi không giới hạn">
            <div>
                {/* Hero Section */}
                <PureHero 
                    title="Cùng học tiếng Đức với mình nhé!" 
                    subtitle="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!" 
                    backgroundImage="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    buttonText="Tham gia cộng đồng"
                    buttonLink="#" 
                    contentWidth="60%"
                    contentPosition="center"
                    titleColor="#ffffff"
                    subtitleColor="#f0f0f0"
                    buttonColor="#ffffff"
                    navColor="#ffffff"
                />

                {/* Section 1 */}
                <TwoColumnSection
                  title="Câu Chuyện Của Chúng Tôi"
                  description="Learn Anything luôn khuyến khích bạn giống như nước – không ngừng tìm kiếm, thay đổi và thích nghi với những thử thách mới. Học tập là con đường rộng mở, nơi bạn không ngừng hoàn thiện bản thân mỗi ngày. Đây là nơi bạn không chỉ học để biết, mà còn học để tìm thấy phiên bản linh hoạt, mạnh mẽ và không ngừng thay đổi của chính mình."
                  buttonText="Kết nối"
                  buttonLink="#"
                  titleColor="#000000"
                  descriptionColor="#333333"
                  buttonColor="#000000"
                  imageSrc="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  imageAlt="Placeholder Image"
                  imagePosition="right"
                  columnRatio='1.5'
                />

                {/* Section 2 */}
                <TwoColumnSection
                  title="Cùng học tiếng Đức với mình nhé!"
                  description="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!"
                  // buttonText="Tìm hiểu"
                  // buttonLink="#"
                  titleColor="#000000"
                  descriptionColor="#333333"
                  buttonColor="#000000"
                  imageSrc="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  imageAlt="Placeholder Image"
                  imagePosition="left"
                  columnRatio='1.5'
                />
            </div>
        </Layout>
    );
};

export default HomePage;
