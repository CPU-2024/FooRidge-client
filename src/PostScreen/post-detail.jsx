import React from "react";
import './post-detail.css';

const PostDetail = () =>{
    return (
        <>
        <div id="post-detail">
            <div className="post-detail-top">
                도너츠 나눔합니다!
            </div>
            <div className="post-detail-center">
                <div className="post-detail-location">
                    {/*가게 위치 */}
                    영운동 / 던킨도너츠
                </div>
                <div className="post-detail-time">
                    {/*업로드한 시간*/}
                    1시간 전
                </div>
            </div>
            <div className="post-detail-bottom">
                {/*제품설명 */}
                오늘판매하고 남은 ~~~<br />
                도넛들 남은거 가져가세요<br />
                선착순으로 나눔합니다!
            </div>
        </div>
        <hr />
        </>
    )

}

export default PostDetail;