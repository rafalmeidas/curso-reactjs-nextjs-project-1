import { render, screen } from '@testing-library/react';
import { postCardPropsMock } from './mock';
import { PostCard } from '.';

const props = postCardPropsMock;

describe('<Post />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute(
      'src',
      'img/img.png',
    );
    expect(
      screen.getByRole('heading', { name: /title 1/i }),
    ).toBeInTheDocument();
  });
});
