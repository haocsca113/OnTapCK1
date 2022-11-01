$(document).ready(function () {
    $("#btnHien").click(function () {
        $("#myModal").modal();
    })

    function KiemTraMa() {
        var mauKT = /[0-9]{9}$/;
        if (!mauKT.test($("#txtMa").val())) {
            $("#tbMa").html("* Bạn nhập sai");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KiemTraMa);

    function KiemTraHT() {
        var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        if ($("#txtTen") == "") {
            $("#tbTen").html("*Bat buoc nhap");
            $("tbTen").addClass("mauDo");
            return false;
        }

        if (!kt.test($("#txtTen").val())) {
            $("#tbTen").html("*Chu cai dau tien cua moi tu phai viet hoa");
            $("tbTen").addClass("mauDo");
            return false;
        }

        $("#tbTen").html("*");
        return true;
    }
    $("#txtTen").blur(KiemTraHT);

    function kiemTraDC() {
        var mauKT1 = /^[A-Za-z0-9-_]{3,15}$/;
        // var mauKT = /(abc)$/;
        if ($("#txtDC").val() == "") {
            $("#tbDC").html("*Bat buoc nhap !!");
            $("#tbDC").addClass("mauDo");
            return false;
        }

        if (!mauKT1.test($("#txtDC").val())) {
            $("#tbDC").html("*Chu cai dau moi tu phai viet hoa !!");
            $("#tbDC").addClass("mauDo");
            return false;
        }

        $("#tbDC").html("*");
        return true;
    }
    $("#txtDC").blur(kiemTraDC);

    //Lay gia tri cua section
    $("#slGia").change(function () {
        $("#slGia option:selected").each(function () {
            alert($(this).val());
            //Thay doi gia cho dung voi dich vu da chon
            $("#txtGiaDV").val($(this).val())
        })
    })

    $(".chkDoDung").click(function () {
        var tong = 0;
        var n = $(".chkDoDung:checked").length;
        if (n > 0) {
            $(".chkDoDung:checked").each(function () {
                tong += parseFloat($(this).val());
                $("#txtKQ").val(tong);
            })
        }
    })
    $("input[name='giam']").change(function () {
        var tong = parseFloat($("#txtKQ").val()) + parseFloat($("#txtGiaDV").val()) - parseFloat($(this).val());
        $("#txtTong").val(tong);
    })

    var i = 2;
    $("#btnSave").click(function () {
        // alert('HI')
        var ma = $("#txtMa").val();
        var ht = $("#txtTen").val();
        var dc = $("#txtDC").val();
        var tdv = $("#txtGiaDV").val();
        var tdd = $("#txtKQ").val();
        var tiengiam = $("input[name='giam']").val()
        var tong = $("#txtTong").val();
        // var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ht + "</td><td>" + dc + "</td><td>" + "<tr><td>" + tdv + "</td><td>" + "<tr><td>" + tdd + "</td><tr>" + "<tr><td>" + tong + "</td><td>";
        
        var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ht + "</td><td>" + dc + "</td><td>" + tdv + "</td><td>" + tdd + "</td><td>" + tiengiam + "</td><td>" + tong + "</td></tr>";


        // $("table tbody").append("<tr></tr>");
        // $("table tbody").append((i++));
        // $("table tbody").append("<td></td>");
        // $("table tbody").append(ma);
        // $("table tbody").append("<td></td>");
        // $("table tbody").append(ht);
        // $("table tbody").append("<td></td>");
        // $("table tbody").append(dc);
        // $("table tbody").append("<td></td>");
        // $("table tbody").append(tdv);
        // $("table tbody").append("<td></td>");
        // $("table tbody").append(tdd);
        // $("table tbody").append("<td></td>");
        // $("table tbody").append(tong);
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})