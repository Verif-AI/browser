import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function JustificationCard() {
  return (
    <div className="pt-2">
      <Card variant="outlined">
        <CardContent>
          <Typography className="pb-4" variant="h5">
            Veracity Score: 70
          </Typography>
          <div className="h-[285px] overflow-auto">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Hac habitasse platea dictumst vestibulum rhoncus est pellentesque
              elit ullamcorper. Tristique et egestas quis ipsum suspendisse ultrices.
              Felis eget nunc lobortis mattis aliquam faucibus purus in.
              Pellentesque nec nam aliquam sem et tortor consequat id porta.
              Laoreet non curabitur gravida arcu ac tortor.
              Fusce id velit ut tortor pretium viverra suspendisse.
              Faucibus scelerisque eleifend donec pretium vulputate sapien nec
              sagittis aliquam. Non diam phasellus vestibulum lorem sed risus. Diam
              in arcu cursus euismod quis viverra. Facilisi cras fermentum odio
              eu feugiat pretium nibh. Quis lectus nulla at volutpat diam. 
              Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. 
              Risus commodo viverra maecenas accumsan lacus vel facilisis. 
              Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. 
              Tellus in metus vulputate eu scelerisque felis imperdiet. 
              Risus ultricies tristique nulla aliquet enim tortor at.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>

  )
}