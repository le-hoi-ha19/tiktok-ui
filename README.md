\*tư duy xây dựng menu đa cấp():

-   khi hover vào nút more-btn thì nó sẽ render ra cái list của cái mảng đầu tiên(cả cái menu là phần tử đầu tiên của 1 cái mảng)
    -khi bấm vào English 1 cái thì đó là 1 menu khác(cả menu khác thì push nó vào làm phần tử số 2 của mảng)
    -nếu có cấp 3 nữa thì sẽ tiếp tục push vào làm phần tử số 3 của mảng
    -và tại thời điểm hiện tại thì luôn render phần tử cuối cùng của mảng
    -khi bấm nút back thì chỉ cần xóa phần tử cuối mảng

const [history,setHistory] =useState([{data:items}])

{data:items} đại diện cho dữ liệu của trang hiện tại,nó tương tự như:

{
title: 'Language',
data: [
{
code: 'end',
title: 'English',
},
{
code: 'vi',
title: 'Tiếng việt',
},
],
}
