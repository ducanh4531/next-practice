interface PhotosDetailPageProps {
	params: { id: number; photoId: number };
}

const PhotoDetailPage = ({
	params: { id, photoId },
}: PhotosDetailPageProps) => {
	return (
		<div>
			PhotoDetailPage {id} {photoId}
		</div>
	);
};

export default PhotoDetailPage;
