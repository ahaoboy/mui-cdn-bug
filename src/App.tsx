import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  CssBaseline,
  ThemeProvider,
  createTheme
} from "@mui/material";

const theme = createTheme();

export default function Repro() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 4 }}>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          sx={{ border: '1px dashed grey', p: 2, mb: 4 }}
        >
          <Button variant="outlined" size="small">
            Small Button
          </Button>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="repro-label">Label</InputLabel>
            <Select
              labelId="repro-label"
              label="Label"
              value={10}
            // sx={{ height: 40 }}
            >
              <MenuItem value={10}>Value 10</MenuItem>
              <MenuItem value={20}>Value 20</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
