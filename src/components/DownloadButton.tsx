import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import "./DownloadButton.scss";

interface DownloadButtonProps {
    isReverse: boolean,
    btnLabel: String
}

export function DownloadButton({isReverse, btnLabel}: DownloadButtonProps) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="download-button">
            <button onClick={handleClickOpen} className={isReverse ? "btn-download-reverse" : "btn-download"}>
                {btnLabel}
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    className: 'download-popup'
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Téléchargement"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Merci pour l’intérêt que vous portez à notre projet !
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Notre application est en cours de préparation… et on a hâte de vous la faire découvrir !
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        👉 Laissez-nous votre adresse mail et soyez les premiers à embarquer dès sa sortie. 👀🔐
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="quit-btn">Quitter</Button>
                    <Button onClick={handleClose} className="contact-btn" autoFocus>
                        Je veux garder contact !
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
        ;
}