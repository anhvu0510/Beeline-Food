function callAjaxRequest(url, method, cb) {
  $.ajax({
    url: url,
    type: method,
    catche: false,
    success: function (data) {
      cb(data, null);
    },
    error: function (err) {
      cb(null, err);
    },
  });
}
$(document).ready(function () {
  $("#btnAdd").click(function (event) {});

  //btn Chi Tiet San Pham
  $(".detail")
    .unbind()
    .click(function (event) {
      const id = this.dataset.id;
      const content = $("#modalContent");
      const url = `${$(location).attr("href")}/${id}/chi-tiet`;
      callAjaxRequest(url, "GET", (data, err) => {
        if (err) {
          console.log(err.statusText);
          return;
        }
        content.html(data);
      });
      
        $('#btnCapNhat').attr('data-id', id);
    });
    //Khoa San Pham
    $(".lock")
        .unbind()
        .click(function (event) {
            const isLock = ($(this).children('p').html() === 'Khoá')
            const id = this.dataset.id;
            const url = isLock === true ? `${$(location).attr("href")}/${id}/khoa` : `${$(location).attr("href")}/${id}/mo-khoa`;
        
            callAjaxRequest(url, "GET", (data, err) => {
                if (err) {
                    console.log(err.statusText);
                    return;
                }
                console.log(data);
            });
        });
    //Mo Khoa
    // $(".unlock")
    //     .unbind()
    //     .click(function (event) {
    //         const id = this.dataset.id;
    //         //const content = $("#modalContent");
    //         const url = `${$(location).attr("href")}/${id}/mo-khoa`;
    //         callAjaxRequest(url, "GET", (data, err) => {
    //             if (err) {
    //                 console.log(err.statusText);
    //                 return;
    //             }
    //             console.log('Mo Khoa San Pham');
    //         });
    //     });

  //Xu ly hien thi khi nhap xong ID Anh
  $("input[name='MaAnh']").on("blur", function (event) {
    const idIMG = $(this).val();
    const defautURLIMG = "img/logo-3.jpg";
    const urlIMG =
      idIMG !== ""
        ? `https://drive.google.com/uc?export=view&id=${idIMG}`
        : defautURLIMG;
    console.log(urlIMG);
    $("#imgProduct").attr("src", urlIMG);
  });

  //btnCap Nhat San Pham
  $("#btnCapNhat")
    .unbind()
    .click(function (event) {
      const isUpdate = $(this).html().includes("Cập Nhật");
      if (isUpdate) {
        $("input[class='form-control']").removeAttr("disabled");
        $("select[name='DonVi']").removeAttr("disabled");
        $(this).html("Lưu Lại");
        return;
      }
      const id = this.dataset.id;
      const url = `${$(location).attr("href")}/${id}/cap-nhat`;

      callAjaxRequest(url, "GET", (data, err) => {
        if (err) {
          console.log("Loi : ", err.statusText);
          return;
        }
        console.log(data);
      });
    });

  $("#btnDong").click(function (event) {
    $("#btnCapNhat").html("Cập Nhật");
  });
});

$(window).on("load", function () {
  /*------------------
        Preloder
    --------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(2000).fadeOut("slow");
});
