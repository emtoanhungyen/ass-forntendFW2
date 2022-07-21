import React from 'react'
import { A, Container, Div, Img, Img1, Img2, My5, Span, Span1 } from '../../../styles/admin/ContactFooter'
import Vpbank from './../../../assets/images/Vpbank.png';
import Moca from './../../../assets/images/moca.png';
import Redivo from './../../../assets/images/redivo.png';
import Vnpay from './../../../assets/images/vnpay.png';
import Citi from './../../../assets/images/citi.png';
import Dienthoaivui from './../../../assets/images/dienthoaivui.png';

type Props = {}

const Contact = (props: Props) => {
  return (
    <Container>
      <div>
        <Div>
          <Span>Tìm cửa hàng</Span>
          <A href="">Tìm cửa hàng gần nhất</A>
          <A href="">Mua hàng từ xa</A>
          <A href="">Gặp trực tiếp tại cửa hàng</A>
        </Div>
        <div>
          <Span>Phương thức thanh toán</Span>
          <div>
            <Img1 src={Citi} alt="" />
            <Img src={Moca} alt="" />
            <Img src={Redivo} alt="" />
            <Img src={Vnpay} alt="" />
          </div>
          <Img1 src={Vpbank} alt="" />
        </div>
      </div>
      {/* - */}
      <div>
        <div>
          <A href="">Gọi mua hàng: </A>
          <A href="">1800 2044 </A>
          <A href="">(8h00 - 22h00)</A>
        </div>
        <div>
          <A href="">Gọi khiếu nại: </A>
          <A href="">1800 2044 </A>
          <A href="">(8h00 - 22h00)</A>
        </div>
        <div>
          <A href="">Gọi bảo hành: </A>
          <A href="">1800 2044 </A>
          <A href="">(8h00 - 22h00)</A>
        </div>
        <My5>
          <Span1>Đối tác dịch vụ bảo hành</Span1>
          <A href="">Điện thoại - Máy tính</A>
        </My5>
        <div>
          <Span>Trung tâm bảo hành ủy quyền</Span>
          <Img2 src={Dienthoaivui} alt="" />
        </div>
      </div>
      {/* - */}
      <div>
        <Div>
          <A href="">Mua hàng và thanh toán online</A>
          <A href="">Mua hàng trả góp Online</A>
          <A href="">Tra thông tin đơn hàng</A>
          <A href="">Tra điểm Smember</A>
          <A href="">Tra thông tin bảo hành</A>
          <A href="">Tra cứu hoá đơn VAT điện tử</A>
          <A href="">Trung tâm bảo hành chính hãng</A>
          <A href="">Quy định về việc sao lưu dữ liệu</A>
          <A href="">Dịch vụ bảo hành điện thoại</A>
        </Div>
      </div>
      {/* - */}
      <div>
        <Div>
          <A href="">Quy chế hoạt động</A>
          <A href="">Chính sách Bảo hành</A>
          <A href="">Liên hệ hợp tác kinh doanh</A>
          <A href="">Khách hàng doanh nghiệp (B2B)</A>
          <A href="">Ưu đãi thanh toán</A>
          <A href="">Tuyển dụng</A>
        </Div>
      </div>
    </Container>
  )
}

export default Contact