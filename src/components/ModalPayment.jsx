import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MoneyIcon from "@mui/icons-material/Money";

const styles = {
  boxContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    p: 1,
  },
  boxTitle: {
    bgcolor: "primary.main",
    color: "colorWhite.main",
    p: "5px",
    pl: 3,
  },
  titleMain: {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: 18,
  },
  boxNav: {
    p: 1,
    pl: 0,
    pr: 0,
  },
  btnNav: {
    mr: 1,
  },
  gridContainer: {},
  btnMethodPayMent: {
    mb: 1,
    width: "100%",
  },
  gridPaymentCenter: {
    bgcolor: "colorGreenOpacity.main",
    border: "1px solid",
    borderColor: " greenDark.main",
  },

  boxNumber: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "63px",
    minWidth: "100%",
    // p: 0,
    // m: 0,
    borderRadius: 1,
    color: "colorWhite.main",
    fontWeight: 700,
    fontSize: 20,
    border: "1px solid",
    borderColor: "white",
  },
  titleMethod: {
    textTransform: "uppercase",
    fontWeight: 500,
    pt: 1,
    pb: 1,
  },
  boxBtnCenter: {
    pt: 2,
    pb: 2,
    display: "flex",
    justifyContent: "center",
  },
  paperMoney: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80px",
    fontSize: 18,
    border: "1px solid",
    borderColor: "greenDark.main",
  },
  boxBtnCenterBottom: {
    border: "1px solid",
    borderColor: "colorGreen1.main",
    p: 1,
    mt: 1,
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: 1,
  },
  boxReceipt: {
    border: "2px solid",
    borderColor: "greenDark.main",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  brandTitle: {
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: "2px",
    borderBottom: "1px solid",
    mt: 1,
    mb: 1,
  },

  receiptText: {
    fontSize: 12,
  },

  listProductReceipt: {
    width: "100%",
  },
  boxTypographyPayment: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

let numbers = [...Array(12).keys()];

const ModalPayment = () => {
  return (
    <div>
      <Modal open={true}>
        <Box sx={styles.boxContainer}>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleMain}>B??n 1</Typography>
            <Typography>M?? ????n: 123</Typography>
          </Box>
          <Box sx={styles.boxNav}>
            <Button variant="contained" sx={styles.btnNav} color="colorGray">
              Kh??ch h??ng
            </Button>
            <Button variant="contained" sx={styles.btnNav} color="colorBlue">
              Thanh to??n
            </Button>
          </Box>
          <Grid container spacing={1} sx={{ flexGrow: 1 }}>
            <Grid item md={2}>
              <Button
                variant="contained"
                startIcon={<MoneyIcon />}
                sx={styles.btnMethodPayMent}
                color="green"
              >
                Ti???n m???t
              </Button>
              <Button
                variant="contained"
                startIcon={<MoneyIcon />}
                sx={styles.btnMethodPayMent}
                color="colorGray1"
              >
                Ti???n m???t
              </Button>
              <Button
                variant="contained"
                startIcon={<MoneyIcon />}
                sx={styles.btnMethodPayMent}
                color="colorGray1"
              >
                Ti???n m???t
              </Button>
            </Grid>
            <Grid item md={6}>
              <Grid container spacing={0} sx={styles.gridPaymentCenter}>
                <Grid item md={8} sx={{ p: 1 }}>
                  <Typography sx={styles.titleMethod}>
                    Thanh to??n ti???n m???t
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="S??? ti???n"
                    variant="outlined"
                    sx={{ bgcolor: "colorWhite.main" }}
                    fullWidth
                    size="small"
                  />
                  <Box sx={styles.boxBtnCenter}>
                    <Button
                      variant="contained"
                      sx={{ mr: 1 }}
                      color="colorYellow"
                    >
                      L??m m???i
                    </Button>
                    <Button variant="contained" color="colorBlue">
                      X??c nh???n
                    </Button>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item md={6}>
                      <Button
                        variant="contained"
                        color="colorWhite"
                        sx={styles.paperMoney}
                      >
                        50.000 VN??
                      </Button>
                    </Grid>
                    <Grid item md={6}>
                      <Button
                        variant="contained"
                        color="colorWhite"
                        sx={styles.paperMoney}
                      >
                        50.000 VN??
                      </Button>
                    </Grid>
                    <Grid item md={6}>
                      <Button
                        variant="contained"
                        color="colorWhite"
                        sx={styles.paperMoney}
                      >
                        50.000 VN??
                      </Button>
                    </Grid>
                    <Grid item md={6}>
                      <Button
                        variant="contained"
                        color="colorWhite"
                        sx={styles.paperMoney}
                      >
                        50.000 VN??
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid container>
                    {numbers.map((item) => (
                      <Grid item md={4}>
                        <Button
                          variant="contained"
                          color="colorGreenOpacity1"
                          sx={styles.boxNumber}
                        >
                          {item}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Box sx={styles.boxBtnCenterBottom}>
                <Button
                  variant="contained"
                  size="large"
                  color="colorGreen1"
                  sx={{ color: "colorWhite.main" }}
                >
                  Ho??n t???t
                </Button>
              </Box>
            </Grid>
            <Grid item md={4}>
              <ReceiptDetail />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

const ReceiptDetail = () => {
  return (
    <Box sx={styles.boxReceipt}>
      <Typography sx={styles.brandTitle}>lowland coffee</Typography>
      <Typography sx={styles.receiptText}>Kh??ch h??ng: Nh??n</Typography>
      <Typography sx={styles.receiptText}>Nh??n vi??n qu???y: Nh??n</Typography>
      <Typography sx={styles.receiptText}>01-01-2022 10:10 AM</Typography>
      <Box sx={{ width: "90%" }}>
        <ListProduct />
        <ListProduct />
        <Box sx={{ borderTop: "1px solid", mt: 2 }}>
          <Box sx={styles.boxTypographyPayment}>
            <Typography>T???ng</Typography>
            <Typography>175.000</Typography>
          </Box>
          <Box sx={styles.boxTypographyPayment}>
            <Typography>Th??? th??nh vi??n</Typography>
            <Typography>-5.000</Typography>
          </Box>
          <Box sx={styles.boxTypographyPayment}>
            <Typography>Th??nh ti???n</Typography>
            <Typography>200.000</Typography>
          </Box>
          <Box sx={styles.boxTypographyPayment}>
            <Typography>Kh??ch ????a</Typography>
            <Typography>500.000</Typography>
          </Box>
          <Box sx={styles.boxTypographyPayment}>
            <Typography>Tr??? l???i</Typography>
            <Typography>300.000</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ListProduct = () => {
  return (
    <Box sx={styles.listProductReceipt}>
      <Typography sx={{ fontWeight: "bold", mb: 1 }}>Coffee</Typography>
      <Box sx={{ borderBottom: "1px solid " }}>
        <Grid container sx={{ fontSize: 14 }}>
          <Grid item md={7}>
            C?? ph?? s???a ????
          </Grid>
          <Grid item md={2}>
            1
          </Grid>
          <Grid item md={3} sx={{ textAlign: "end" }}>
            20.000??
          </Grid>
        </Grid>
        <Grid container sx={{ fontSize: 14 }}>
          <Grid item md={7}>
            C?? ph?? s???a ????
          </Grid>
          <Grid item md={2}>
            1
          </Grid>
          <Grid item md={3} sx={{ textAlign: "end" }}>
            20.000??
          </Grid>
        </Grid>
      </Box>
      <Typography sx={{ textAlign: "end" }}>80.000??</Typography>
    </Box>
  );
};

export default ModalPayment;
